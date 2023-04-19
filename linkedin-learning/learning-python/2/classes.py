#
# Example file for working with classes
#

class MyClass():
    def method1(self):
        print("MyClass: method one")

    def method2(self, argString):
        print("MyClass: method two: " + argString)

class AnotherClass(MyClass):
    def method1(self):
        MyClass.method1(self)
        print("AnotherClass: method one")

    def method2(self, argString):
        # MyClass.method2(self, argString)
        print("AnotherClass: method two")

def main():
    c = MyClass()
    c.method1()
    c.method2("demo")

    c2 = AnotherClass()
    c2.method1()
    c2.method2("demo")

if __name__ == "__main__":
    main()
