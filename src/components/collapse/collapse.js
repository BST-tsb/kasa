import "./collapse.scss";
import dataAbout from '../../data/data_about.json';
import ItemCollapse from "./itemCollapse";


export default function Collapse () {




    return <div className="wrapper">
        <div className="accordion">
            {
                dataAbout.map((item, e) => (
                <ItemCollapse item={item} />
                    
                ))
            }

        </div>
    </div>
  };
  