#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import time
from fibonacci import FibonacciCalculator

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo fila
channel.queue_declare(queue='rpc_queue', durable=True)

def callback(ch, method, properties, body):
    n = int(body)
    response = None
    methods = ['', '_with_cache']

    for m in methods:
        fibonacci = FibonacciCalculator()
        callable = getattr(fibonacci, 'calculate%s' % m)
        response = callable(n)
        number_of_calls = fibonacci.number_of_calls
        print("queue %s | Fib(%s) = %s | %s" % (properties.reply_to, n, response, number_of_calls))

    ch.basic_publish(exchange='',
                     routing_key=properties.reply_to,
                     properties=pika.BasicProperties(
                        correlation_id = properties.correlation_id
                     ),
                     body=str(response))

    ch.basic_ack(delivery_tag = method.delivery_tag)

channel.basic_qos(prefetch_count=1)
channel.basic_consume(
    queue='rpc_queue',
    on_message_callback=callback
)
channel.start_consuming()
