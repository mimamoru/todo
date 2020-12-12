import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const Filter = (props) => {
    const classes = useStyles();
    const fiilerList = ["All", "Todo", "Done"];
    return (
        <Paper className={classes.root}>
            <Tabs
                value={fiilerList.indexOf(props.value)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {fiilerList.map((e, i) => {
                    return <Tab key={i} onClick={() => props.filter(e)} label={e} />
                })}
            </Tabs>
        </Paper>
    )
}
export default Filter;