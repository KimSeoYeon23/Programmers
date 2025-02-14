import string
a, b = input().split(" ")

def convert_notation(n, base):
    T =  string.digits + string.ascii_uppercase
    q, r = divmod(n, base)

    return convert_notation(q, base) + T[r] if q else T[r]
        
print(convert_notation(int(a), int(b)))