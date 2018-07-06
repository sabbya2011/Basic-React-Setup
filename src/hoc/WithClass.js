import React from 'react';
const withClass = (AppComponent,newClass) => {
    return (props)=> (
        <div className={newClass} {...props}>
            <AppComponent/>
        </div>
    )
}
export default withClass;