from tmsapp.models import transaction
from django.conf import settings
from datetime import datetime
import uuid
from django.utils import timezone
import pandas as pd
from django.forms import model_to_dict
import datetime

class transactions:


    @classmethod
    def addTransaction(cls,name,amount,referenceId,status,transactiontype,address):
        try:
            created_date = datetime.now(tz=timezone.utc)
            save_qry= transaction(amount=amount, name=name,reference_id=referenceId,status=status,transaction_type=transactiontype,billing_address=address,created_date=created_date)
            save_qry.save()

            saveqrysuccessobj = {
                'response': "success"
            }
            return saveqrysuccessobj

        except Exception, err:
            saveqryfailureobj = {

                'response': "Failure"
            }
            return saveqryfailureobj
    @classmethod
    def listTransactions(cls):
        try:
            getqry = transaction.objects.all().order_by('created_date')

            datalist = []

            for values in getqry:
                datalist.append({
                    'amount': values.amount,
                    'name': values.name,
                    'address': values.billing_address,
                    'reference': values.reference_id,
                    'created_date': values.created_date,
                    'status': values.status,
                    'type': values.transaction_type,
                })

            return datalist

        except Exception, err:
            failureobj = {

                'response': "Failure"
            }
            return failureobj


    @classmethod
    def getcsv(cls,startDate,endDate):
        try:

            txnobjs = [model_to_dict(txnobj) for txnobj in transaction.objects.filter(created_date__range=(startDate, endDate))]
            df = pd.DataFrame(txnobjs)
            file_path = 'static/csv/' + str(uuid.uuid4())+'.csv'
            df.to_csv(file_path, sep=',')
            return file_path

        except Exception, err:
            failureobj = {

                'response': "Failure"
            }
            return failureobj

