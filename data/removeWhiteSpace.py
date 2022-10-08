# first get all lines from file
with open('senate.json', 'r') as f:
    lines = f.readlines()

# remove spaces
lines = [line.replace(' ', '') for line in lines]
lines = [line.replace('\n', '') for line in lines]

# finally, write lines in the file
with open('senate.geojson', 'w') as f:
    f.writelines(lines)