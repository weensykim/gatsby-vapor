import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-card-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
            className="post-card-tag"
            key={tag}
            to={`/tags/${_.kebabCase(tag)}`}
            >
            #{tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default Tags;