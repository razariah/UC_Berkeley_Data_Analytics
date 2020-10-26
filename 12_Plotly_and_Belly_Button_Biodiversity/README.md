**Goal**
To create a Bellybutton Bacteria Diversity Dashboard using Plotly JavaScript and D3

The final dash board is composed of 5 components:
1. A Dropdown Selection List to select the individual sample ID
2. The demographic info of the chosen individual
3. A horizonal barchart of chosen person's top 10 OTUs in descending order of their sample values
4. A gauge chart of chosen person's belly button washing frequency
5. A bubble plot of chosen person's belly button bacteria biodiversity

**Implementation**
 - index.html - layout of the dashboard components, and defines containers to plot charts using Plotly
 - plots.js - Use D3 to load data from sample.js. Implemented individual Plotly functions to plot the chart componets described above. Javascript functions such as map, filter, slice, reverse, etc. are used to transform the data in the way needed for Plotly plots to work.
 