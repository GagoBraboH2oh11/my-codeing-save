import requests
from bs4 import BeautifulSoup

url='https://www.google.com/maps/search/supermercado/@-25.4879788,-49.3551631,15z/data=!3m1!4b1?entry=ttu'

headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"}

site = requests.get(url,headers=headers)
soup = BeautifulSoup(site.content,'html,parser')
numbers = soup.find_all