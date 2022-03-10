# import the necessary library
import json
import math


def convert():
    # read the json file as dictionary
    with open('products.json', 'r',encoding="utf8") as fp:
        products = json.load(fp)

    # iterate through each items
    for item in products:
        cat = ' '.join(item['categories'])
        cat = cat.lower()

        # check if item is of camera categories
        if 'camera' in cat:
            
            # update the price with 20% discount and roundoff to lower number
            item['price'] = math.floor(item['price']*0.8)

    # Now Save the updated products as discount.json
    with open('discount.json', 'w') as fp:
        #json.dump(products, fp)
        json.dump(products, fp,indent=4,separators=(',', ':'))
        
def main():
    convert()
    
if __name__ == '__main__':
    main()