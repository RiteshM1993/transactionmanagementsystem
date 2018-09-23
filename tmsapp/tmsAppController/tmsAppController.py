import json
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
from tmsapp.tmsAppService.tmsAppService import transactions
import time


@api_view(['GET'])
def getTransaction(request):

    tranctions_obj = transactions()

    result = tranctions_obj.listTransactions()

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['POST'])
def createTransaction(request):
    name = request.data['name']
    amount = request.data['amount']
    referenceId = request.data['referenceId']
    status = request.data['status']
    transactiontype = request.data['transactiontype']
    address = request.data['address']

    tranctions_obj = transactions()

    result = tranctions_obj.addTransaction(name,amount,referenceId,status,transactiontype,address)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

@api_view(['POST'])
def generateCsv(request):
    startDate = request.data['startDate']
    endDate = request.data['endDate']
    tranctions_obj = transactions()
    result = tranctions_obj.getcsv(startDate,endDate)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)
