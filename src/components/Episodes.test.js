import React from 'react';
import { getAllByRole, queryAllByTestId, render, screen } from '@testing-library/react'
import Episodes from "./Episodes"

const mockEpisodesData = [
    {
        "id": 553946,
        "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/553946"
            }
        }
    },
    {
        "id": 578663,
        "url": "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name": "Chapter Two: The Weirdo on Maple Street",
        "season": 1,
        "number": 2,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        },
        "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/578663"
            }
        }
    },
    {
        "id": 578664,
        "url": "https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
        "name": "Chapter Three: Holly, Jolly",
        "season": 1,
        "number": 3,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
        },
        "summary": "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/578664"
            }
        }
    },
    {
        "id": 578665,
        "url": "https://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
        "name": "Chapter Four: The Body",
        "season": 1,
        "number": 4,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg"
        },
        "summary": "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/578665"
            }
        }
    },
    {
        "id": 578666,
        "url": "https://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
        "name": "Chapter Five: The Flea and the Acrobat",
        "season": 1,
        "number": 5,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg"
        },
        "summary": "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/578666"
            }
        }
    }
]

test("Episodes component renders properly", () => {
    render(<Episodes episodes={[]} />)
})

test("Missions List component shows mission names when re-rendered with data from the API", () => {
    const { rerender, queryByTestId, getAllByTestId } = render(<Episodes episodes={[]} />);
    const episodes = queryByTestId("episode");

    expect(episodes).toEqual(null);

    rerender(<Episodes episodes={mockEpisodesData} />)

    const rerenderEp = getAllByTestId("episode")

    expect(rerenderEp).toHaveLength(5)

})