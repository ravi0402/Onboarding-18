#Raising an exception
a = 102
if a < 101:
    raise Exception('a should not be less than 101. The value of a was: {}'.format(a))

#AssertionError Exception
import sys
def linux_func():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."

#Using try,except,else and finally
try:
    linux_func()
except AssertionError as error:
    print(error)
else:
    try:
        with open('readme.txt') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('Cleaning up, irrespective of any exceptions.')



