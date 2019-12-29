#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import uuid
import sys

class FibonacciRpcClient():

    def __init__(self):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        self.channel = self.connection.channel()

        # Definindo fila de envio
        self.channel.queue_declare(queue='rpc_queue', durable=True)

        # Definindo fila de retorno
        result = self.channel.queue_declare('', exclusive=True)
        self.callback_queue = result.method.queue

        self.channel.basic_consume(
            queue=self.callback_queue,
            on_message_callback=self.on_response,
            auto_ack=True
        )

    def on_response(self, ch, method, properties, body):
        if self.correlation_id == properties.correlation_id:
            self.response = int(body)

    def call(self, n):
        self.response = None
        self.correlation_id = str(uuid.uuid4())
        self.channel.basic_publish(
            exchange='',
            routing_key='rpc_queue',
            properties=pika.BasicProperties(
                reply_to=self.callback_queue,
                correlation_id=self.correlation_id,
            ),
            body=str(n)
        )
        while self.response is None:
            self.connection.process_data_events()
        return int(self.response)

# Realizando envio
fibonacci_rpc_client = FibonacciRpcClient()
n = int(sys.argv[1]) if len(sys.argv) > 1 else 0
for i in range(0, n+1):
    fi = fibonacci_rpc_client.call(i)
    print("fib(%s) = %s" % (i, fi))
