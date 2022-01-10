import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, SxProps, Theme, } from "@mui/material";
import {useRef} from "react";
import {MuiTableField} from "@/types";
import {makeComma} from "@/util/UtilMethods";

const CovidTable = ({covidInfo}:{covidInfo:any}) => {
    const fields = useRef<MuiTableField[]>([
        {key:'accExamCnt', label: '누적 의심신고 검사자'},
        {key:'decideCnt', label: '확진자 수'},
        {key:'deathCnt', label: '사망자 수'},
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
                    <TableRow>
                        {fields.current.map((field, index) => <TableCell sx={field.sx} key={index}>{makeComma(covidInfo[field.key])}</TableCell>)}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CovidTable