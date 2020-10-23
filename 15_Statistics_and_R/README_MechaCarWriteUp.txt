1. Multiple linear regression result from MechaCar data set.
The MLR is performed with the summary as below:
Call:
lm(formula = mpg ~ vehicle.length + vehicle.weight + spoiler.angle + 
    ground.clearance + AWD, data = data)

Residuals:
     Min       1Q   Median       3Q      Max 
-19.4701  -4.4994  -0.0692   5.4433  18.5849 

Coefficients:
                   Estimate Std. Error t value Pr(>|t|)    
(Intercept)      -1.040e+02  1.585e+01  -6.559 5.08e-08 ***
vehicle.length    6.267e+00  6.553e-01   9.563 2.60e-12 ***
vehicle.weight    1.245e-03  6.890e-04   1.807   0.0776 .  
spoiler.angle     6.877e-02  6.653e-02   1.034   0.3069    
ground.clearance  3.546e+00  5.412e-01   6.551 5.21e-08 ***
AWD              -3.411e+00  2.535e+00  -1.346   0.1852    
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 8.774 on 44 degrees of freedom
Multiple R-squared:  0.7149,	Adjusted R-squared:  0.6825 
F-statistic: 22.07 on 5 and 44 DF,  p-value: 5.35e-11


* Which variables/coefficients provided a non-random amount of variance to the mpg values in the dataset?
Assuming alpha=0.05, vehicle.length and groud.clearance coefficients have signficant p-values much lower than the false positive cutoff of 0.05. Therefore the null hypothesis is rejected and we have to accept the alternative hypotheis their varaince are non-random.

* Is the slope of the linear model considered to be zero? Why or why not?
The slopes for vehicle.length is 6.267 and for ground.clearance is 3.546. So they are not zero.

* Does this linear model predict mpg of MechaCar prototypes effectively? Why or why not?
The overall p-value of 5.35e-11 is signficant to reject H0. The adjusted R-squred of 0.68 and F-statistic of 22.07 both strongly suggest this linear model can predict mpg of MechaCar prototypes effectively.


2. Suspension Coil Summary

Summary statistics for pounds-per-inch (PSI) varaible is:
mean      median    variance         Std 
1499.531020 1499.746532   76.234593    8.731242 

* The design specifications for the MechaCar suspension coils dictate that the variance of the suspension coils must not exceed 100 pounds per inch. Does the current manufacturing data meet this design specification? Why or why not?
The calculated variance for PSI = 76.23, which is less than the 100 PSI threshould. Therefore the current manufacturing data meets this design specification.

3. Suspension Coil T-test
To test if the PSI is statistically different from the population mean of 1,500 psi, the one-sampled t-test is preformed and the result is below:
	One Sample t-test

data:  data2$PSI
t = -0.65784, df = 149, p-value = 0.5117
alternative hypothesis: true mean is not equal to 1500
95 percent confidence interval:
 1498.122 1500.940
sample estimates:
mean of x 
499.531


Since the p-value = 0.5117 is greater than the assumped alpha=0.05, the null hypothesis is accepted and therefore no significant difference is found between the current manufacturing psi and the population mean.

3. Design Your Own Study
* Think critically about what metrics you would think would be of interest to a consumer (cost, fuel efficiency, color options, etc.).
I'm thinking of using metrics including fuel efficiency (mpg), cylinder, body-style(sedan, suv, truck), engine-type(eg gas vs electric), color, and cost

* Determine what question we would ask, what the null and alternative hypothesis would be to answer that question, and what statistical test could be used to test this hypothesis.
To demonstrate MechaCar has a better fuel efficiency we need to show that MechaCar's mpg is significant higher than the mean of its top competitors. The null hypothesis would be mpg of MechaCar is about the same as that of other brands. The alternative hypothethis is MechaCar's mpg is significantly higher than that of its competitors. Similarly we should test if MechaCar's mean price is significantly lower than its competitors. Null hypothesis is there is no significant difference between mean of MechaCar and mean of its competitor.

* Knowing what test should be used, what data should be collected?
A single-tailed two-sample t-test should be used in this case. Mpg of competitor's different vehicles mpg should be collected. Similarly prices of competitor's difference vehicles should also be collected.
 1 
