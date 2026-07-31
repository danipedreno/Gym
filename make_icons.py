import struct
import zlib


def png_chunk(tag, data):
    chunk = tag + data
    crc = zlib.crc32(chunk) & 0xffffffff
    return struct.pack('>I', len(data)) + chunk + struct.pack('>I', crc)


def draw_icon(size):
    bg = (15, 23, 42)       # slate-900
    accent = (249, 115, 22)  # orange-500
    plate = (241, 245, 249)  # slate-100

    px = [[bg for _ in range(size)] for _ in range(size)]

    cx, cy = size / 2, size / 2
    bar_half_len = size * 0.30
    bar_half_h = size * 0.045
    plate_r = size * 0.16
    plate_cx_off = size * 0.30
    plate_half_w = size * 0.075

    for y in range(size):
        for x in range(size):
            dx = x - cx
            dy = y - cy

            on_bar = abs(dy) <= bar_half_h and abs(dx) <= bar_half_len

            left_plate = (abs(dx + plate_cx_off) <= plate_half_w and abs(dy) <= plate_r)
            right_plate = (abs(dx - plate_cx_off) <= plate_half_w and abs(dy) <= plate_r)

            if on_bar or left_plate or right_plate:
                px[y][x] = accent if (on_bar and not (left_plate or right_plate)) else plate

    return px


def write_png(path, size):
    px = draw_icon(size)
    raw = bytearray()
    for row in px:
        raw.append(0)
        for (r, g, b) in row:
            raw += bytes((r, g, b))

    compressed = zlib.compress(bytes(raw), 9)

    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = struct.pack('>IIBBBBB', size, size, 8, 2, 0, 0, 0)
    with open(path, 'wb') as f:
        f.write(sig)
        f.write(png_chunk(b'IHDR', ihdr))
        f.write(png_chunk(b'IDAT', compressed))
        f.write(png_chunk(b'IEND', b''))


if __name__ == '__main__':
    write_png('icons/icon-192.png', 192)
    write_png('icons/icon-512.png', 512)
    print('icons written')
