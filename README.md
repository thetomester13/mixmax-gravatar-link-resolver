# Gravatar Preview for Mixmax

This is an open source Mixmax Link Resolver. See <http://developer.mixmax.com/docs/overview-link-resolvers> for more information about how to use this example code in Mixmax.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9146/resolver?url=test%40email.com
```

## To Add This Link Resolver to your Mixmax Account

1. Go to `https://app.mixmax.com/dashboard/settings/integrations`
2. Under 'Link Resolvers' hit 'Add Link Resolver'
    - Fill in 'Gravatar' for Description
    - '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)' for Regular Expression (Regex from: http://emailregex.com/, Python version)
    - 'http://localhost:9146/resolver' for Resolver API URL
3. Hit 'Add Link Resolver'!