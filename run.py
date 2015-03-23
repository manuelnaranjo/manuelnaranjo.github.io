#!/usr/bin/env python

import sys

import SocketServer
import BaseHTTPServer
import SimpleHTTPServer


class ThreadingSimpleServer(SocketServer.ThreadingMixIn,
                            BaseHTTPServer.HTTPServer):
    pass


def main(port = 8000):
    server = ThreadingSimpleServer(('', port),
                                   SimpleHTTPServer.SimpleHTTPRequestHandler)
    try:
        while 1:
            sys.stdout.flush()
            server.handle_request()
    except KeyboardInterrupt:
        print "Finished"


if __name__ == '__main__':
    port = 8000

    if sys.argv[1:]:
        port = int(sys.argv[1])
    main(port)
