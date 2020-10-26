## Goal

Use Webscraping (BeautifulSoup, Splinter, Pandas) to scrape NASA and space-facts websites to extract interesting Mars facts and images URLs, store them in MongoDB, and design a web page to display those info elegantly.

**Development tools**

    * BeautifulSoup - for web scraping
    * Chromedriver/Splinter - use to load web page and act as a browser
    * Pandas - convient for scraping web table to convert to html
    * MongoDB - NoSQL database to store and query scraped data
    * Flask/HTML - for Web development
    * CSS/Bootstrap - for Web page style
    
**Scraping Steps**
Scraping
1. Scrape lastest Mars news from [NASA Mars page](https://mars.nasa.gov/news/). The news is extracted by searching elment "ul" with CSS class of "item_list" and element "li" with the CSS class of "slide." Only the first page is selected. Next step is to scrape news title and paragraph by selecting CSS classes of "content_title" and "article_teaser_body", respectively.
2. Scrape featured image from [NASA space image](https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars). Searching by id is used on the id "full_image." The link to image is found by text search of "more info", link is clicked by the program to get to the actual page containing the image URL, which is scraped finally.
3. Scrape Mars facts from [space-facts](http://space-facts.com/mars). Pandas is used to extract the first table and converted to html. Bootstrap classes including "table", "table-striped", and "table-hover" are passed to Pandas to_html function to integrate CSS in the html.
4. Scrape Mars hemisphere titles, thumbnails, and full image URLs. First the CSS class "itemLink" is used to find all hemisphere link items. Depending on "h3" or "img" tag, thumbnail URLs and hemisphere titles can be retrieved, respectively. The link is used to load the page that contains the page to the full image, and the full image URLs is finally scraped.
5. All scraped data is stored in MongoDB for future querying.

**Flask App**
**Layout (from top-down):
1. Jumbotron - The title "Mission to Mars" in a background of a Mars explorer. A "Scrape New Data" button is used to scrape new data. Clicking the button will trigger the Flask scraping function to re-scrape everything as described above and store data in MongoDB. A new page showing "Scraping Successful!" will be shown along with a button to go back to homepage.
2. Lastest Mars News is retrieved from MongoDB and its title and paragraph is displayed.
3. The featured Mars image URL scraped most recently will retrieved from MongoDB and the image displayed.
4. The Mars facts table html stored in MongoDB is displayed.
5. Four Mars Hemispheres title and thumnails are displayed. Below each thumnail a link to the full image can be clicked to open its full image in a new browser tab.
