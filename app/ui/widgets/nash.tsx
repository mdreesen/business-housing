'use client'


export default async function Nash() {

    return (
        <div>
            <div data-encoded={process?.env?.NASH_WIDGET_DATA} />
        </div>
    )
}
