# Cryptocurrencies

## M18 Unsupervised Learning ML


The analysis of the current crypto currency market was made using unsuperivsed learning.

Intially, the steps of preprocessing included:
1) Removing inactive currencies
2) Removed entries with missing data
3) Keeping cryptos already mined
4) Converting catogorical features to dummy variables. 
5) After conversion the result included 96 features from "Algorithm" and "Prooftype" features.

After standerdizing the data, the step of dimension reduction was made using PCA.  The first three principle components were chosen for further analysis. An obvious identification from K-means elbow curve confirmed that K=4 for clustering PCs. Therefore K-means was conducted for clustering using PC1, PC2, and PC3.  Both combined original data and cluster class was grouped in a single data frame for visulization.

For visulization we first did 3-D scatter plot to allow for interactive inspection of Alrogithem and Coin name in relationship to the four clusters. It can be seen that cluster '0' and '2' has a majority of the cryptos. Cluster '3' has only one coin with the name "Waves." From a 2-D scatter plot contrasting "total coins mined" and "total coin supply" it can be seen that cluster '0' represents a group with more coins mined than the other 3 clusters. Cluster '2' represents coins with a big range in total supply but minimum "total mined" numbers.

In summary, unsupervised learning methods allow grouping of (cluster) crypto currencies with distinct distribution in terms of totol coins mined and coin supply. The interactive 3-D plot allow for identification of algorithms in different clusters.
