import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, SxProps, Theme, } from "@mui/material";
import {useRef} from "react";
import {makeComma} from "@/util/UtilMethods";
import {MuiTableField} from "@/types";

const MovieTable = ({movies}:{movies:any[]}) => {
    const fields = useRef<MuiTableField[]>([
        {key:'rank', label: '순위', sx: {textAlign: 'center'}},
        {key:'rankOldAndNew', label: '신규진입여부', sx: {textAlign: 'center'}},
        {key:'movieNm', label: '제목'},
        {key:'audiAcc', label: '누적관객수', sx: {textAlign: 'right'}},
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
                    {movies.map((movie, index) => (
                        <TableRow key={`body_${index}`}>
                            {fields.current.map((field, row_index) => {
                                if (field.key === 'audiAcc') {
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{makeComma(movie[field.key])}</TableCell>
                                } else if (field.key === 'rankOldAndNew'){
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{movie[field.key] === 'NEW' ? 'O' : 'X'}</TableCell>
                                } else {
                                    return <TableCell sx={field.sx} key={`row_${index}_${row_index}`}>{movie[field.key]}</TableCell>
                                }
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MovieTable