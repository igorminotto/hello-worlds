#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import sys

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo exchange
channel.exchange_declare(exchange='logs',
                         exchange_type='fanout')

# Realizando envio
message = ' '.join(sys.argv[1:]) or "Hello World!"
channel.basic_publish(
    exchange='logs',
    routing_key='',
    body=message,
    properties=pika.BasicProperties(
        delivery_mode = 2, # make message persistent
    )
)
connection.close()
