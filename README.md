# Cast List Challenge

Dev challenge to build a tool for the ROH

## Setup

The Royal Opera House (ROH) needs a custom cast sheet generated for just one performance of an
upcoming production. Please follow these instructions to complete the task.

### Instructions

Create a simple app that displays the:

-   `title`
-   `shortDescription`
-   List of `creatives` associated with the `productions`
    -   Their `name`s and `role`s
-   List of cast members (`castRoles`) for the performance (`activities`)

#### Production Information

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| Production       | Turandot                                                                |
| Performance Date | 10/03/2023                                                              |
| API Endpoint     | https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban |

#### Example design

![Example Design](/images/cast-list-challenge.png "Example Design")

## Technical Background

At the ROH we use the [JSON API Specification](https://jsonapi.org/) to define our API endpoints.
The API endpoint provided above uses this spec which organises the information in data objects
with defined relationships. For the ROH Event Details object this means the `event-detail` object
relates to `productions` and `runs` objects which in turn relate to `creatives` and `activities`
objects.

We use the term Production to refer to an Opera or Ballet that can be repeated in many Runs. The
Runs then have activities which are the individual performances.

### Tools to use

We will accept apps built using any modern JS framework/libary. We use React written in Typescript
within the ROH but the challenge **does not** need to be completed in these tools. Any JS will do.

The output of this should be some simple markup with very basic styling and shouldn't be worked on
for more than a couple of hours.

Please fork this Github repo and commit often as you work through the challenge. Please send the
URL of your forked repo back to HR.
