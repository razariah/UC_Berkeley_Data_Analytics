#README
### The Process: I implemented neural network/deep neural network classification algorithms to classify if a charity application is successful or not based on a combination of numeric and categorical attributes in the application.

### Data proprocessing including the following steps:

#### Remove features that are not very useful in machine learning including:
* EIN, Names, Status, and Special_considerations as they are either irrelavent or have the majority single value.
* Generate list of categorical variables and based on unique values to decide to bin values in the Application_type and Classification attributes
* OneHotEncoding categorical variables and merge them with originals while droping those categorical variables
* Splitting the data into training and testing data, and scale the data
* Data was modeled using both Neural Network (NN) and Deep Neural Network (DNN) classification.

#### Neural Networks
* The numebr of nodes in the hidden layer were chosen to be two times of the input size.
* It achieved 72.42% accuracy and stopped at loss with 0.55 with epocs=50. 
* Increasing epocs to 100 obtained 72.47% accuracy and losss remains at 0.55.

#### Deep Neural Networks
* The process began with two hidden layers, with number of nodes be 8 and 5, respectively.
* The result is 72.44% accuracy and loss = 0.55.
* The number of nodes were increased in the first hidden layer to 40 and 8, respectively and achieved 72.64% accuracy and loss = 0.55.
* The the 3rd hidden layer was added while keeping number nodes in the first two layers as before.
* The result is 72.66% accuracy and loss=0.55.

#### Result
* Increasing the accuracy above 75% was not possible.  Obervastions of all experiments confirmed the end accuracy in training data is a bit higher (close to 74%) than that of the test data, indicating a slight overfitting of the model.
* Adding more nodes or hidden layer might not help much in futher improving the accuracy.

#### SVM
* Tests using SVM on the same training data achieved an accuracy of 72%, slightly worse than either the NN or the DNN model described above. 

#### Conclusion 
Something in the data could be hindering the classification performance, leaving room for further investigation.
