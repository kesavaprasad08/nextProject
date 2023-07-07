import Card from "../ui/Card";

function TodoItem(props) {
    return<Card>
            <h5>{props.title}</h5>
            <button>Delete</button>
            </Card>
        
    
};

export default TodoItem;