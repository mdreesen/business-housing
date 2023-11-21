'use client';


export default async function Nash() {

    return (
        <div>
            <div id="widgetData" data-encoded={process?.env?.NASH_WIDGET_DATA} />
        </div>
    )
}
