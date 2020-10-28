## Goal

This was a difficult module to manage.  I utilized various Pytho libraries for Webscraping, such as BeautifulSoup, Splinter, Pandas, to scrape NASA and space-facts websites to extract interesting Mars facts and images URLs, to store them in MongoDB, followed by the design of a web page to display the gathered info nicely.

#### Development tools

Here is a lsit of development tools used to accomplish the task:
    * BeautifulSoup - for web scraping
    * Chromedriver/Splinter - use to load web page and act as a browser
    * Pandas - convient for scraping web table to convert to html
    * MongoDB - NoSQL database to store and query scraped data
    * Flask/HTML - for Web development
    * CSS/Bootstrap - for Web page style
    
#### Web Scraping

Here are the steps used to for Scraping:
1. Scraped the lastest Mars news from [NASA Mars page](https://mars.nasa.gov/news/). The news was extracted by searching elment "ul" with CSS class of "item_list" and element "li" with the CSS class of "slide." Only the first page was selected. 
2. The next step was to scrape news title and paragraph by selecting CSS classes of "content_title" and "article_teaser_body", respectively.
3. Features were Scraped from image [NASA space image](https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars). Searching by id was used on the id "full_image." A link to the image was found by text search of "more info", link is clicked by the program to get to the actual page containing the image URL, which was finally scraped.
4. Facts about Mars were Scraped from [space-facts](http://space-facts.com/mars). To extract the first table, Pandas was used the converted to html. Bootstrap classes including "table", "table-striped", and "table-hover" were passed to Pandas to_html function to integrate CSS in the html.
5. Mars hemisphere titles were Scraped , including thumbnails, and full image URLs. First the CSS class "itemLink" was used to find all hemisphere link items. Depending on "h3" or "img" tag, thumbnail URLs and hemisphere titles can be retrieved, respectively. The link was used to load the page that contains the page to the full image, and the full image URLs was finally scraped.
6. All scraped data was stored in MongoDB for future querying.

#### Flask App
**Layout (from top-down):
Here the layout was established from top to down and these are the steps:
1. Jumbotron - The title "Mission to Mars" in a background of a Mars explorer. A "Scrape New Data" button is used to scrape new data. Clicking the button will trigger the Flask scraping function to re-scrape everything as described above and store data in MongoDB. A new page showing "Scraping Successful!" will be shown along with a button to go back to homepage.
2. Lastest Mars News was retrieved from MongoDB and it's title and paragraph were displayed.
3. The featured Mars image URL scraped most recently was retrieved from MongoDB and the image displayed.
4. The Mars facts table html stored in MongoDB was displayed.
5. Four Mars Hemispheres title and thumnails were displayed. Below each thumnail, a link to the full image can be clicked, to open its full image in a new browser tab.
