import sys
import logging
from eventhubs import EventHubClient, Receiver, Offset

import examples
logger = examples.get_logger(logging.INFO)

class MyReceiver(Receiver):
    def __init__(self, partition):
        super(MyReceiver, self).__init__()
        self.partition = partition
        self.total = 0
        self.last_sn = -1
        self.last_offset = "-1"

    def on_event_data(self, event_data):
        self.last_offset = event_data.offset
        self.last_sn = event_data.sequence_number
        self.total += 1
        logger.info("Partition %s, Received %s, sn=%d offset=%s",
                    self.partition,
                    self.total,
                    self.last_sn,
                    self.last_offset)

def receiveEvents():
    try:
        ADDRESS = "amqps://iothubowner%40sas.root.pi-broker:SharedAccessSignature%20sr%3Dpi-broker.azure-devices.net%26sig%3DMSg9Pba4uObLCa%252B4CcR3tuN2KuTOtpz1KBiN3Vsk6jI%253D%26skn%3Diothubowner%26se%3D1524463239@pi-broker.azure-devices.net/messages/events/"
        CONSUMER_GROUP = "python-webapp"
        OFFSET = Offset("-1")

        EventHubClient(ADDRESS if len(sys.argv) == 1 else sys.argv[1]) \
            .subscribe(MyReceiver("0"), CONSUMER_GROUP, "0", OFFSET) \
            .run()

    except KeyboardInterrupt:
        pass
