import { Divider, Grid, Typography } from "@mui/material"

export const BankAccount = () => {
    return (
        <>
            <Typography sx={{ p: 2, fontWeight: 'bold' }} variant="h5">
                Bank Account
            </Typography>
            <Divider />
            <Typography variant="h5" sx={{ fontSize: '15px', fontWeight: 'bold', pl: 2, mt: 2 }}>
                Checking
            </Typography>
            <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ pl: 2 }}>
                <Grid display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Bank balance
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        In quick Books
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $2.000.000
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $3.333.333
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Updated
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Moments ago
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
            <Typography variant="h5" sx={{ fontSize: '15px', fontWeight: 'bold', pl: 2, mt: 2 }}>
                Savings
            </Typography>
            <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ pl: 2 }}>
                <Grid display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Bank balance
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        In quick Books
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $2.000.000
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $3.333.333
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Updated
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Moments ago
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 2}} />
            <Typography variant="h5" sx={{ fontSize: '15px', fontWeight: 'bold', pl: 2, mt: 2 }}>
                Master card
            </Typography>
            <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ pl: 2 }}>
                <Grid display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Bank balance
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        In quick Books
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $2.000.000
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $3.333.333
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Updated
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Moments ago
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 2}} />
            <Typography variant="h5" sx={{ fontSize: '15px', fontWeight: 'bold', pl: 2, mt: 2 }}>
                Visa
            </Typography>
            <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ pl: 2 }}>
                <Grid display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Bank balance
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        In quick Books
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $2.000.000
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        $3.333.333
                    </Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{ pr: 2 }}>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Updated
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold', color: '#8b8788' }}>
                        Moments ago
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 2}} />
        </>
    )
}
