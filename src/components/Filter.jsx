

const Filter = (props) => {
    const fiilerList = ["All", "Todo", "Done"]
    return (
        <ul>
           {fiilerList.map(e => {
               return <li><a onClick={() => props.filter(e)}>{e}</a></li>
            })}
           
        </ul>
    )
    // return (
    //     <ul>
    //         {fiilerList.map(e => {
    //             rerurn
    //                 <li>
    //                 <a onClick={() => props.filter(e)}>{e}</a>
    //             </li>
    //     })}
        
    //     </ul >
    // )
}
export default Filter;