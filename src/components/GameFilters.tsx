import Grid from '@mui/material/Unstable_Grid2';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { GENRES, PLATFORMS, SORT_BY } from '../filterConstants.ts';
import React, { useState } from 'react';
import { filterTypes } from '../types.ts';

interface GameFiltersProps {
    onFilter: React.Dispatch<React.SetStateAction<filterTypes>>;
}

function GameFilters({ onFilter }: GameFiltersProps) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value);
    const [sortBy, setSortBy] = useState(SORT_BY[0].value);

    function handlePlatform(e: SelectChangeEvent) {
        setPlatform(e.target.value);
        onFilter((prevState) => ({ ...prevState, platform: e.target.value }));
    }

    function handleGenre(e: SelectChangeEvent) {
        setGenre(e.target.value);
        onFilter((prevState) => ({ ...prevState, genre: e.target.value }));
    }

    function handleSortBy(e: SelectChangeEvent) {
        setSortBy(e.target.value);
        onFilter((prevState) => ({ ...prevState, sortBy: e.target.value }));
    }

    return (
        <>
            <Grid xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="platform-label">Platform</InputLabel>
                    <Select
                        labelId="platform-label"
                        id="platform"
                        value={platform}
                        label="Platform"
                        onChange={handlePlatform}
                    >
                        {PLATFORMS.map((platform) => (
                            <MenuItem
                                key={platform.value}
                                value={platform.value}
                            >
                                {platform.display}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre"
                        value={genre}
                        label="Genre"
                        onChange={handleGenre}
                    >
                        {GENRES.map((genre) => (
                            <MenuItem key={genre.value} value={genre.value}>
                                {genre.display}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="sort_by-label">Sort by</InputLabel>
                    <Select
                        labelId="sort_by-label"
                        id="sort_by"
                        value={sortBy}
                        label="Sort_by"
                        onChange={handleSortBy}
                    >
                        {SORT_BY.map((sort) => (
                            <MenuItem key={sort.value} value={sort.value}>
                                {sort.display}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </>
    );
}

export default GameFilters;
