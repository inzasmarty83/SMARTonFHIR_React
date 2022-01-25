import { result } from "./Data";

const patientPositionNode = result.patientPosition.nodeId;
let posArray = [];

const xCoord = 550,
  yCoord = 50;

export const utlis = {
  filterData: () => {
    let sortedData = result.nodeList.sort((a, b) =>
      a.nodeId > b.nodeId ? 1 : -1
    );
    utlis.setNodePositions(sortedData);

    let nodeArr = sortedData.map((v, i) => {
      return {
        id: v.nodeId,
        // type: "input",
        data: {
          label: (
            <>
              Node-{v.nodeId}
              <br />
              {v.description}
            </>
          ),
        },
        // position: posArray[i],
        position: utlis.postions[i],

        style: utlis.nodeStyle(v),
        // draggable: false,
        connectable: false,
      };
    });

    sortedData.forEach((v, i) => {
      if (v.parentNodes.length) {
        v.parentNodes.forEach((_pNode) => {
          nodeArr.push({
            id: `e${_pNode}-${v.nodeId}`,
            type: "straight",
            arrowHeadType: "arrowclosed",
            source: `${_pNode}`,
            target: `${v.nodeId}`,
          });
        });
      }
    });

    return nodeArr;
  },

  nodeStyle: (_node) => {
    if (_node.nodeId === patientPositionNode) {
      return {
        background: JSON.parse(_node.style).bgcolor,
        color: JSON.parse(_node.style).color,
        border: "4px dashed red",
      };
    } else {
      return {
        background: JSON.parse(_node.style).bgcolor,
        color: JSON.parse(_node.style).color,
      };
    }
  },

  setNodePositions: (nodeArr) => {
    nodeArr.forEach((node, index) => {
      let yMultiplier = 100 * index;

      if (node.childIdNodes.length > 1) {
        let childLength = node.childIdNodes.length;

        let divider = xCoord / childLength;

        node.childIdNodes.forEach((v, i) => {
          posArray.push({
            x: divider + i * divider,
            y: yCoord + yMultiplier,
          });
        });
      } else {
        /**one child */
        posArray.push({
          x: xCoord,
          y: yCoord + yMultiplier,
        });
      }
    });

    console.log(posArray);
  },
  nodeDragged: (event, node) => {},

  postions: [
    {
      x: 550,
      y: 50,
    },
    {
      x: 550,
      y: 153,
    },
    {
      x: 790,
      y: 180,
    },
    {
      x: 550,
      y: 314,
    },
    {
      x: 550,
      y: 466,
    },
    {
      x: 263,
      y: 576,
    },
    {
      x: 550,
      y: 568,
    },
    {
      x: 833,
      y: 575,
    },
    {
      x: 252,
      y: 700,
    },
    {
      x: 550,
      y: 700,
    },
    {
      x: 876,
      y: 700,
    },
    {
      x: 473,
      y: 895,
    },
    {
      x: 727,
      y: 895,
    },
    {
      x: 1009,
      y: 899,
    },
    {
      x: 731,
      y: 1024,
    },
    {
      x: 1023,
      y: 1143,
    },
    {
      x: 1023,
      y: 1230,
    },
    {
      x: 922,
      y: 1443,
    },
    {
      x: 1170,
      y: 1435,
    },
    {
      x: 27,
      y: 1009,
    },
    {
      x: 218,
      y: 1129,
    },
    {
      x: 392,
      y: 998,
    },
  ],
};
