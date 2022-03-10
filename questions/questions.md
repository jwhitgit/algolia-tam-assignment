_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

--

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

--

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

---

Responses

Question 1

Hi Marissa,

Thanks for reaching out! I am sorry to hear you're not enjoying the latest update.

The easiest way to delete/clear an index from the dashboard is the "Delete"/"Clear" option listed under the "Manage Index" drop down menu - unnfortuarnly that is currently the simplest way. You can also delete one or more indexes in your code (varies depending on language), and you can see documentation for that here: https://www.algolia.com/doc/api-reference/api-methods/delete-index/

We are always looking to improve our UI, so I will let the team know this feature can still be imporoved. Let me know if you have any other questions.

Thanks, Joey

Question 2

Hi,

I am sorry to hear you and your users are havinng Algolia related issues on your website.

Algolia limits the size of indiviudal records for performance reasons. Currently, no individual record can be more than 100KB and the average record size across all records can be no more thann 10KB. Do you have the data for the record sizes your users are attempting?

You are running into this error because you are trying to indeex records that exceed your plan's limit. The solution to this problem would be to reduce the size of your records (maybe some of the unnecessary metadata).

Please let me know if you are still unclear or have any follow up questions. Here is some relevant documention for reference as well: https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records-#:~:text=When%20you%20try%20to%20index,inside%20your%20record%20is%20necessary.

Thanks, Joey

Question 3

Hi Marc,

Thanks for reaching out. I think I will need a little more information to full diagnose the failure. My first suggestion would be to make sure "searchkit is install/updated. Please try:

npm install searchkit

Let me know if that fixes anything, if not we can continue to investigate.

Thanks, Joey
