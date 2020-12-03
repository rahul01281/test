import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
    return (
        <Card className="ingoBox">
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">{title}</Typography>
                <h2 className="infoBox__cases">+{cases}</h2>
                <Typography color="textSecondary" className="infoBox__total">Total: {total}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
