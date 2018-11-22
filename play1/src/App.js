import React, { Component } from "react";
import { ListItemStyle, PaginationStyle,PagHeaderStyle ,ContentStyle} from "./css/Styles.css";
import Pagniation from "./component/Pagination";
import ListItem from "./component/ListItem";

class App extends Component {
  render() {

    const cityData = ["London", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Manchester", "Sheffield", "Leeds", "Edinburgh", "Leicester"];
    const listData = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky[E]",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts[E]",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania[E]",
      "Rhode Island[F]",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia[E]",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];

    return (
      <React.Fragment>
        <section>
          <Pagniation
            list={listData}
            itemsPerPage={8}
            style={PaginationStyle}
            header={"US States"}
            headerStyle={PagHeaderStyle}
            contentStyle={ContentStyle}
            render={list =>
              list.map((item, index) => {
                return (
                  <ListItem key={index} style={ListItemStyle}>
                    {item}
                  </ListItem>
                );
              })
            }
          />
           <Pagniation
            list={cityData}
            itemsPerPage={3}
            style={PaginationStyle}
            header={"Cities in London"}
            headerStyle={PagHeaderStyle}
            contentStyle={ContentStyle}
            render={list =>
              list.map((item, index) => {
                return (
                  <ListItem key={index} style={ListItemStyle}>
                    {item}
                  </ListItem>
                );
              })
            }
          />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
