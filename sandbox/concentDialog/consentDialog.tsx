// 'use client'

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';
// import { CheckBox, CheckBoxTwoTone } from '@mui/icons-material';
// import { Checkbox, Container } from '@mui/material';
// import Link from 'next/link';
// import { IsAdultProps, StateProps, isAdultContext } from '@/globals/IsAdultContext';
// import { ReactElement, Ref, forwardRef, useContext, useState } from 'react';

// const Transition = forwardRef(function Transition(
//     props: TransitionProps & {
//         children: ReactElement;
//     },
//     ref: Ref<unknown>,
// ) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function ConcentDialog() {
//     const [isInformed, setIsInformed] = useState(false);
//     const [open, setOpen] = useState(true);
//     let state = useContext<StateProps>(isAdultContext);

//     const handleAgreeBtn = () => {
//         setIsInformed(true);
//     }

//     const handleAdult = (newState: { state: isAdultStateProps }) => {
//         setOpen(!open);
//         setter(newState);
//         return {

//         }
//     }


//     // INTERESTING
//     const label = { inputProps: { 'aria-label': 'Checkbox: customer adviced of age ristrictions', 'label': 'I understand that "popocorn lungs" is super serious and will lead to a slow and miserable death' } };

//     return (
//         <React.Fragment>
//             <Dialog
//                 fullScreen
//                 open={open}
//                 onClose={() => console.log('close')}
//                 TransitionComponent={Transition}
//             >
//                 <Container maxWidth='md'>
//                     <List>
//                         <ListItemButton onClick={() => handleAdult({ isAdult: true, answered: true })}>
//                             <ListItemText primary="I'm adult as fuck, please hit me with some candy flavoured vape toys with a bad as colorful lightshow shooting from its as." />
//                         </ListItemButton>
//                         <Divider />
//                         <ListItemButton onClick={() => handleAdult({ isAdult: false, answered: true })}>
//                             <ListItemText primary="Wow, thanks for the heads up. I'm just coming of age and a kind and obediant neard with no mind of my own. I'l come back when I'm all grown up and ready to suck that mean as Marlboro." />
//                         </ListItemButton>
//                     </List>
//                 </Container>

//             </Dialog>
//         </React.Fragment >
//     );
// }
