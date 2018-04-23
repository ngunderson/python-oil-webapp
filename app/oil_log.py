import sys
import logging

def get_logger(level=logging.INFO):
    logger = logging.getLogger("oil dash")
    logger.setLevel(level)
    handler = logging.StreamHandler(stream=sys.stdout)
    handler.setFormatter(logging.Formatter('%(asctime)s %(name)-12s %(levelname)-8s %(message)s'))
    logger.addHandler(handler)
    return logger
