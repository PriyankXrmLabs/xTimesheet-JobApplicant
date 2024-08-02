import * as React from 'react';
import styles from './XTimesheet.module.scss';
import type { IXTimesheetProps } from './IXTimesheetProps';

import Login from '../../FuncComponents/Login'




export default class XTimesheet extends React.Component<IXTimesheetProps, {}> {

  


  public render(): React.ReactElement<IXTimesheetProps> {
    const {
     
      hasTeamsContext,
 
    } = this.props;

    return (
      <section className={`${styles.xTimesheet} ${hasTeamsContext ? styles.teams : ''}`}>
        
        <Login/>
      </section>
    );
  }
}
