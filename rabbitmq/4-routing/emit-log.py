#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import sys

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo exchange
channel.exchange_declare(exchange='direct_logs',
                         exchange_type='direct')

# Realizando envio
severity = sys.argv[1] if len(sys.argv) > 1 else 'info'
message = ' '.join(sys.argv[2:]) or "Hello World!"
channel.basic_publish(
    exchange='direct_logs',
    routing_key=severity,
    body=message,
    properties=pika.BasicProperties(
        delivery_mode = 2, # make message persistent
    )
)
connection.close()
