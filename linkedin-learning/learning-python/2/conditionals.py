#
# Example file for working with conditional statements
#


def main():
    x, y = 100, 100

    # conditional flow uses if, elif, else
    if x > y:
      st = "x is greater than y"
    elif x == y:
      st = "x is the same as y"
    else:
      st = "x is less than y"

    # Cconditional statments
    stc =  "x is greater than y" if x > y else "x is the same as y" if x == y else "x is less than y"

    print (st)
    print (stc)

if __name__ == "__main__":
    main()
