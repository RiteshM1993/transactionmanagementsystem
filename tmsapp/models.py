from __future__ import unicode_literals

from django.db import models

import uuid


# Create your models here.

# Transaction ID, amount, name, billing address, reference_id, DateTime, status, transaction_type (paid, free, custom)




class transaction(models.Model):

    transaction_number = models.UUIDField(default=uuid.uuid4)
    transaction_id = models.AutoField(primary_key=True)
    amount = models.BigIntegerField()
    name = models.CharField(max_length=1000)
    billing_address = models.TextField()
    reference_id = models.TextField()
    created_date = models.DateField(null=True)
    status = models.IntegerField()
    transaction_type = models.CharField(max_length=1000)

    class Meta:
        db_table = "transaction"







