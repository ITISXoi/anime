import { getDetailFilmForSEO } from "@/actions/seo";
import { convertString } from "@/utils/funtions";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";

export async function GET(
  _req: NextRequest,
  { params }: { params: { identifier: string } }
) {
  const { props } = await getDetailFilmForSEO(params);

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          fontSize: 80,
          background: "url(http://anisage.net/images/anisage-bgr.jpg)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            marginTop: "120px",
            lineHeight: "80px",
            textShadow: `5px 0 #000, -5px 0 #000, 0 5px #000, 0 -5px #000,
                         4px 4px #000, -4px -4px #000, 4px -4px #000, -4px 4px #000`,
          },
        },
        `${convertString(
          props?.data?.title || "AniSage - Free Anime Stream!",
          60
        )}`
      )
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
