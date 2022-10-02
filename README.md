# UFO Sightings Analysis

**Deployment Link**: https://jaspreetkhela.github.io/ufos/

## Overview of Project

### Purpose
The purpose of this analysis was to allow users to filter through a dataset of UFO sightings using a multitude of filters. Specifically, users can filter through the dataset displayed in a table by date, city, state, country, and the shape of the aircraft.

## Results

### Tutorial
The webpage can be used as follows.

1. When a user visits the webpage, the following is displayed.
_____

<img width="1440" alt="sightings_webpage" src="https://user-images.githubusercontent.com/80941606/193435149-937ceb9d-8187-4c64-a362-d9ac96981be7.png">

**Figure 1**: UFO sightings webpage.
_____

2. A user can first filter the sightings table by a date. Here, we have used the date "1/10/2010".
_____

<img width="1440" alt="date_filter" src="https://user-images.githubusercontent.com/80941606/193435181-22e3711a-40b3-43bf-a79c-a438994da186.png">

**Figure 2**: Filtering the sightings table by a date value.
_____

3. Next, a user can filter the sightings table by a city. Here, we have searched for sightings in "el cajon".
_____

<img width="1440" alt="city_filter" src="https://user-images.githubusercontent.com/80941606/193435186-d16fe08a-6dde-49bb-97f6-1a7a992bb120.png">

**Figure 3**: Filtering the sightings table by a city value.
_____

4. Next, a user can filter the sightings table by a state. Here, we have searched for sightings in "ca".
_____

<img width="1440" alt="state_filter" src="https://user-images.githubusercontent.com/80941606/193435197-c83a273a-1bdb-4d82-b9de-1c99e56da1f1.png">

**Figure 4**: Filtering the sightings table by a state value.
_____

5. Next, a user can filter the sightings table by a country. Here, we have searched for sightings in the "us".
_____

<img width="1440" alt="country_filter" src="https://user-images.githubusercontent.com/80941606/193435202-43b8cad4-5ccd-4ee7-b59b-3e95fd44193d.png">

**Figure 5**: Filtering the sightings table by a country value.
_____

6. Finally, a user can filter the sightings table by the shape of an aircraft. Here, we have searched for aircraft that has a "circle" shape.
_____

<img width="1440" alt="shape_filter" src="https://user-images.githubusercontent.com/80941606/193435210-2de34e21-2c05-4a8b-98e6-698b51c3caec.png">

**Figure 6**: Filtering the sightings table by a shape value.
_____

Note that the filter's input fields are case-sensitive.

## Summary
In summary, this webpage provides a quick and easy method for filtering through a large dataset of UFO sightings.

### Drawbacks
One drawback of this design is that the filter's input fields are case-sensitive. Consequently, a user's search may yield null results even though data does exist for that user's particular search criteria. For example, inputing state as "CA" instead of "ca" will return null results even though we have seen above that there are UFO sightings in the state of California.

### Further Development
Two recommendations for further development are:
* The filter's input fields can convert all inputs to lower case so that the table can return non-null results for data that exists within the dataset as described above.
* The table's data can be graphed so that a user can see UFO sighting trends across parameters.
