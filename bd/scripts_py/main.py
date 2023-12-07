import requests
import json
import os
import sys
from bs4 import BeautifulSoup
import re

# Define the base URLs
future_events_url = "https://www.protiming.fr/Runnings/liste/page:{}/sort:Running.date/direction:asc?url=Runnings/liste"
past_events_url = "https://www.protiming.fr/Results/liste/page:{}/sort:Running.date/direction:asc?url=Runnings/liste"
course_info_url = "https://www.protiming.fr/Runnings/detail/{}"

def get_course_id_for_page(page_number):
    """
    Returns a list of course IDs for a given page number
    """
    # Send a GET request to the URL
    response = requests.get(future_events_url.format(page_number))

    # Get the HTML content of the page
    html_content = response.text

    # Now pass this HTML content to BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all divs with id that matches the pattern 'run{number}'
    divs = soup.find_all('div', id=re.compile('^run\d+$'))

    # Get the course ID from the div's id attribute
    course_ids = [div['id'].replace('run', '') for div in divs]

    return course_ids

print(get_course_id_for_page(12))