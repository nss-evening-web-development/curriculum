'''
readers = list()
books = list()
'''
from datetime import datetime

readers = list()
books = list()

# Menu Constants
GENERATE_READER_REPORT = 'Generate Reader Report'
GET_BOOK_STATUS = 'Get Status of a Book'
SEARCH_BOOKS = 'Search Books'
SEARCH_READERS = 'Search Readers'
ADD_READER = 'Add a Reader'
ADD_BOOK = 'Add a Book'
CHECK_OUT_BOOK = 'Check out a Book'
RETURN_BOOK = 'Return a book'
EXIT = 'Exit'

class Reader():
  def __init__(self, name):
    self.name = name
    self.library_card_number = datetime.now().strftime('%Y%m%d%H%M%S%f%z')
    self.books = list()

  def check_out_book(self, isbn):
    book = get_book_by_isbn(isbn)
    self.books.append(book)
    book.reader = self

  def return_book(self, isbn):
    book = get_book_by_isbn(isbn)
    self.books.remove(book)
    book.reader = None

class Book:
  def __init__(self, title):
    self.title = title
    self.ISBN = datetime.now().strftime('%Y%m%d%H%M%S%f%z')
    self.reader = None

books.append(Book("Title Here"))
books.append(Book("Title There"))
books.append(Book("Title My"))
books.append(Book("Title hshs"))
books.append(Book("Title EVerywhere"))

def exit_method():
  pass

def create_reader():
  name = input("> Reader's Name: ")
  new_reader = Reader(str(name))
  readers.append(new_reader)
  print(f"Added \"{new_reader.name}\" - {new_reader.library_card_number}")
  show_main_menu()

def create_book():
  title = input("> Book's Title: ")
  new_book = Book(str(title))
  books.append(new_book)
  print(f"Added \"{new_book.title}\" - {new_book.ISBN}")
  show_main_menu()

def get_book_by_isbn(isbn):
  result = [book for book in books if isbn == book.ISBN]

  return result[0] if len(result) else None

def get_reader_by_number(library_card_number):
  result = [reader for reader in readers if library_card_number == reader.library_card_number]

  return result[0] if len(result) else None

def search_books():
  search_query = input("> Search Book By Title: ")

  results = [f"\"{book.title}\" - {book.ISBN}" for book in books if search_query in book.title]

  print("***************************************")
  if len(results):
    [print(r) for r in results]
  else:
    print("There were no Results")
  print("***************************************")

  show_main_menu()

def search_readers():
  search_query = input("> Search Readers By Name: ")

  results = [f"\"{reader.name}\" - {reader.library_card_number}" for reader in readers if search_query in reader.name]

  print("***************************************")
  if len(results):
    [print(r) for r in results]
  else:
    print("There were no Results")
  print("***************************************")

  show_main_menu()

def get_book_status():
  isbn = input("> Enter Book's ISBN: ")

  result = get_book_by_isbn(isbn)

  print("***************************************")
  if result:
    reader = result.reader
    if reader:
      print(f"This book was checked out by {reader.name}")
    else:
      print(f"This book is currently Availible")
  else:
    print("There was no book found with that ISBN")
  print("***************************************")

  show_main_menu()

def check_out_book():
  book_isbn = input("> Enter Book's ISBN: ")

  book = get_book_by_isbn(book_isbn)

  print("***************************************")
  if book:
    if book.reader:
      print(f"\"{book.title}\" has been checked out by \"{book.reader.name}\"")
    else:
      print(f"You're in luck! \"{book.title}\" is availible")
      reader_number = input("> Library Card Number of Reader: ")

      reader = get_reader_by_number(reader_number)
      if reader:
        reader.check_out_book(book_isbn)
        print(f"\"{reader.name}\" has checked out \"{book.title}\"")

      else:
        print("There was no reader found with that Library Card Number")
  else:
    print("There was no book found with that ISBN")
  print("***************************************")
  show_main_menu()

def return_book():
  reader_number = input("> Library Card Number of Reader: ")
  reader = get_reader_by_number(reader_number)
  if reader:
    if len(reader.books):
      print(f"Which book does \"{reader.name}\" want to return?")
      for book in reader.books:
        print(f"\"{book.title}\" - {book.ISBN}")
      book_isbn = input("> Enter Book's ISBN: ")
      book = get_book_by_isbn(book_isbn)
      if book:
        reader.return_book(book_isbn)
        print(f"\"{reader.name}\" has returned \"{book.title}\"")
      else:
        print("There was no book found with that ISBN")
    else:
      print(f"\"{reader.name}\" has no books checked out")
  else:
    print("There was no reader found with that Library Card Number")
  print("***************************************")
  show_main_menu()

def reader_report():
  reader_number = input("> Library Card Number of Reader: ")
  reader = get_reader_by_number(reader_number)
  print("***************************************")

  if reader:
    if len(reader.books):
      print(f"Here are \"{reader.name}\"'s checked out books")
      for book in reader.books:
        print(f"\"{book.title}\" - {book.ISBN}")
    else:
      print(f"\"{reader.name}\" has no books checked out")
  else:
    print("There was no reader found with that Library Card Number")
  print("***************************************")
  show_main_menu()

def list_out_thing(item):
  print()

METHOD_MAP = {
    GENERATE_READER_REPORT: reader_report,
    SEARCH_BOOKS: search_books,
    SEARCH_READERS: search_readers,
    GET_BOOK_STATUS: get_book_status,
    ADD_READER: create_reader,
    ADD_BOOK: create_book,
    CHECK_OUT_BOOK:check_out_book,
    RETURN_BOOK:return_book,
    EXIT:exit_method
}

def show_main_menu():
  menu_items = [
    GENERATE_READER_REPORT,
    GET_BOOK_STATUS,
    SEARCH_BOOKS,
    SEARCH_READERS,
    ADD_READER,
    ADD_BOOK,
    CHECK_OUT_BOOK,
    RETURN_BOOK,
    EXIT
  ]

  # getting length of list
  length = len(menu_items)

  # Iterating the index
  for i in range(length):
      print(f"{i + 1}: {menu_items[i]}")

  menu_selection = input("> Enter Menu Selection: ")

  selection_as_int = int()

  try:
    selection_as_int = int(menu_selection) - 1
  except ValueError:
      print(chr(27) + "[2J")
      print("***************************************")
      print("You need to enter a correct menu option")
      print("********************")
      show_main_menu()
  else:
    if selection_as_int < length:
      selected_option = menu_items[selection_as_int]
      METHOD_MAP[selected_option]()



if __name__ == '__main__':
  show_main_menu()
