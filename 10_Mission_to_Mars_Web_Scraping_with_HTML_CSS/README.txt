Mod 10

## Goal

Use BeautifulSoup, Splinter, and Pandas to scrape five different webpages related to Mars, and display the results on a webpage using MongoDB and Flask. 

## Process

**Scraping Mars Data**

<img align="right" src="https://github.com/lorijta92/mission-to-mars/blob/master/static/mtm-ss-all.png?raw=true">

Scraping was first done in a Jupyter notebook to test the code as it was written. After importing the necessary dependencies, I connected to the chromedriver and set up my browser to open each webpage I needed to scrape. I first scraped the [NASA Mars News](https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest) website for the title and text of the most recent article, storing the results in variables to be referenced later. To do this, I used BeautifulSoup  to parse through the HTML and search for the appropriate elements and classes that contained the information I needed with `soup.find_all()`. Because the results come back as a list, I indexed the first item and took the text of that. 

The second page, was the Jet Propulsion Laboratory’s [Mars page](https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars), where I would grab the full-sized featured image. This required clicking two other links after visiting the first page, so I used `browser.click_link_by_partial_text()` and `time.sleep()` to access those pages without inducing an error. Afterwards, I used `soup.find_all()` and `.a[‘href’]` to find the relative image path, which I combined with the main URL to get the full-sized image. 

Third, was the [Mars Weather Twitter Account](https://twitter.com/marswxreport?lang=en), where I would grab the most recent tweet. This was done in the same manner as the first page, parsing through the HTML to find the necessary element, and then grabbing the text of that.  

Next, was scraping Mars facts from the [Space Facts]( https://space-facts.com/mars/
) website. Because the data was stored in a table, I used Pandas to scrape instead of BeautifulSoup. I used `pd.read_html()` to scrape for tables and took the second returned table which stored the facts I needed. I then renamed the columns and set the index before converting that data frame into an HTML table with `df.to_html()`. 

Lastly, I wanted to grab the images and names of all four of Mars’ hemispheres from the [USGS Astrogeology]( https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars
) page. I first searched for the hemisphere titles with BeautifulSoup and stored those names in a list, `hemi_names`. Then for the hemispheres, I searched for all thumbnail links and iterated through the results with a conditional, checking if the thumbnail element contained an image. If true, the relative image path was taken and combined with the main URL, and the full image URL was appended to an empty list (`thumbnail_links`) outside of the loop. To obtain the full-sized images of the hemispheres, I then iterated through each link in `thumbnail_links`, searching for all `img` elements with a `wide-image` class. The results were used to retrieve the full image path of the hemispheres, with the URLs being stored in a list, `full_imgs`. To match the hemisphere name to the correct image link, I zipped together `hemi_names` and `full_imgs` and iterated through that zipped object, first appending the hemisphere title to an empty dictionary as a key, and the image URL as the value, and then appending that dictionary to an empty list. 

After all the code was checked, it was then transferred from the notebook to a Python file and used to create a scraping function. The results of all the scraping was then stored as a dictionary to be returned at the end of the function. 

**Flask**

In a separate file, Flask was used to trigger the scrape function, update the Mongo database with the results, and then return that record of data from the database on a webpage. 

An instance of Flask was created, and then I used PyMongo to establish a connection to the MongoDB server. With this connection, I used the `/scrape` route to run the scrape function located in the imported `scrape_mars.py` file. I then updated the Mongo database with the new collection from the scrape, using `update` and `upsert=True`. The end of this route redirects to the home route. The home route searches for one record of data in the Mongo database and then renders the `index.html` template with that record. 

In `index.html`, the `/scrape` route was linked to a button, which a user could click to initiate the scrape. The remainder of that HTML file was formatted with Bootstrap to display the results from the scrape.
