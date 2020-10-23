import csv
import os

# Assign a variable for the file to load and the path.
file_to_load = os.path.join('Resources', 'election_results.csv')
# Assign a variable to save the path to a file.
file_to_save = os.path.join('analysis', 'election_analysis.txt')

# Initialize a total vote counter.
total_votes = 0
# Candidate Options
candidate_options = []
# County Options
county_options = []
# Initialize voter count per candidate.
candidate_votes = {}
# Initialize count
county_votes = {}

# Winning Candidate and Winning Count Tracker
winning_candidate = ''
winning_count = 0
winning_percentage = 0
# Winning County and Winning Count Tracker
winning_county = ''
winning_counts = 0
winning_percentages = 0



# Open the election results and read the file.
with open(file_to_load) as election_data:
    # To do: read and analyze the data here.
    file_reader = csv.reader(election_data)
    # Read and exclude the header row.
    headers = next(file_reader)
    
    # Print each row in the CSV file.
    for row in file_reader:
        # Add the total vote count.
        total_votes += 1
        # Print the candidate name from each row.
        candidate_name = row[2]
        # Print the count each vote was made from.
        county_name = row[1]
        
        # If candidate does not match any existing candidate:
        if candidate_name not in candidate_options:
            #Add it to the list of candidates.
            candidate_options.append(candidate_name)
            # Begin tracking the candidate's vote count.
            candidate_votes[candidate_name] = 0
        # Add a vote to that candidate's count
        candidate_votes[candidate_name] += 1
        
        # If county does not match any existing county:
        if county_name not in county_options:
            #Add it to the list of candidates.
            county_options.append(county_name)
            # Begin tracking the candidate's vote count.
            county_votes[county_name] = 0
        # Add a vote to that candidate's count
        county_votes[county_name] += 1
        
    # Using the with statement open the file as a text file.
with open(file_to_save, 'w') as txt_file:
    #Print the final vote count to the terminal.
    election_results = (
        f'\nElection Results\n'
        f'---------------------------\n'
        f'Total Votes: {total_votes:,}\n'
        f'---------------------------\n\n')
    print(election_results, end='')
    # Save the final vote count to the text file.
    txt_file.write(election_results)
    
    # Print County Votes
    print('County Votes:\n')
    # Write County Votes
    txt_file.write('County Votes:\n')
    
    for county in county_votes:
        # Retrieve vote count of a county.
        votes = county_votes[county]
        # Calculate the percentage of votes.
        vote_percentage = int(votes)/int(total_votes)*100     
        # Print each county's name, vote count and percentage of votes.
        county_results = ('{}: {:.2f}% ({:,})\n'.format(county,vote_percentage,votes))
        
        # Print each county's vote count and percentage to terminal.
        print(county_results)
        # Save the county results to our text file.
        txt_file.write(county_results)

        # Determine winning vote count and county
        # Determine if the vote is greater than the winning count.
        if (votes > winning_counts) and (vote_percentage > winning_percentages):
            # If true, set winning_count = votes and winning_percent = vote_percentage.
            winning_counts = votes
            winning_percentages = vote_percentage
            # Set the winning county equal to the county's name.
            winning_county = county
    
    winning_county_summary = (
        f'\n--------------------------\n'
        f'Largest County Turnout: {winning_county}\n'
        f'--------------------------\n')
    
    print(winning_county_summary)
    # Save the winning candidate's results to the text file.
    txt_file.write(winning_county_summary)
    

    for candidate in candidate_votes:
        # Retrieve vote count of a candidate.
        votes = candidate_votes[candidate]
        # Calculate the percentage of votes.
        vote_percentage = int(votes)/int(total_votes)*100     
        # Print each county's name, vote count and percentage of votes.
        candidate_results = ('{}: {:.2f}% ({:,})\n'.format(candidate,vote_percentage,votes))
        
        # Print each candidate's vote count and percentage to terminal.
        print(candidate_results)
        # Save the candidate results to our text file.
        txt_file.write(candidate_results)

        # Determine winning vote count and candidate
        # Determine if the vote is greater than the winning count.
        if (votes > winning_count) and (vote_percentage > winning_percentage):
            # If true, set winning_count = votes and winning_percent = vote_percentage.
            winning_count = votes
            winning_percentage = vote_percentage
            # Set the winning candidate equal to the candidate's name.
            winning_candidate = candidate
    
    winning_candidate_summary = (
        f'--------------------------\n'
        f'Winner: {winning_candidate}\n'
        f'Winning Vote Count: {winning_count:,}\n'
        f'Winning Percentage: {winning_percentage:.2f}%\n'
        f'--------------------------\n')
    
    print(winning_candidate_summary)
    # Save the winning candidate's results to the text file.
    txt_file.write(winning_candidate_summary)