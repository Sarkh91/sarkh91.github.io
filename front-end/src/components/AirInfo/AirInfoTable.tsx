import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, SxProps, Theme, } from "@mui/material";
import {useRef} from "react";
import {makeComma} from "@/util/UtilMethods";
import {AirInfoEntity, MuiTableField} from "@/types";


const AirInfoTable = ({airInfoList}:{airInfoList:any[]}) => {
    const fields = useRef<MuiTableField[]>([
        {key:'informCode', label: '통보코드'},
        {key:'informGrade', label: '예보등급'},
        {key:'informOverall', label: '예보개황'},
    ])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {fields.current.map((head, index) => (
                            <TableCell sx={head.sx} key={`head_${index}`}>{head.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {airInfoList.map((air, index) => (
                        <TableRow key={`body_${index}`}>
                            {fields.current.map((field, row_index) => {
                                if (field.key === 'audiAcc') {
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{makeComma(air[field.key])}</TableCell>
                                } else if (field.key === 'rankOldAndNew'){
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{air[field.key] === 'NEW' ? 'O' : 'X'}</TableCell>
                                } else {
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{air[field.key]}</TableCell>
                                }
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AirInfoTable