# Adventure game overview
You wake up on a sandy beach, surrounded by pieces of the shipwreck. You are alone. A dense forest lies behind you and the open sea stretches ahead.

_Story branches will diverge into three story paths_
### Build a boat and leave the island -> boat_materials :
        You decide to build a boat. You can use the broken pieces of wood from the shipwreck or lightweight canes that grow on the island.
        1 - Use the shipwreck wood -> ending_crash
        2 - Use the lightweight canes -> canes_boat
            Your cane boat floats well. At the horizon, you see calm water but to the east but endless, and dark storm clouds to the west but a safer land is behind it.
                a - Paddle east -> ending_escape
                b - Paddle west -> ending_storm
    
### Explore the island forest -> forest
        The forest is thick and noisy. You find the entrance to a dark cave but you also hear growling deeper in the trees.
        1 - Keep exploring the forest -> ending_tiger
        2 - Enter the cave despite the creatures -> cave
            At the back of the cave you find a treasure chest with an old map showing an escape plan lying on top of it. But snakes, spiders, and scorpions crawl all around them.
            a - Face your fear and take both the treasure and the map -> ending_treasure
            b - Give in to your fear and run out empty-handed -> signal_fire
*Story branches reconversion into 'signal' fire decision point*

### Light a signal fire and wait for rescue -> signal_fire:
        You decide to make a fire big enough to be seen from the sea. You need fuel, and you only have one match to light.
        1 - Use damp shipwreck wood -> ending_nosmoke
        2 - Use palm leaves and driftwood -> fire_lit
            The fire burns brightly as night falls. A ship's lights appear far away.
            a - Stay awake -> ending_rescued
            B - Have some rest untill a rescue comes -> ending_fire_out

###All Story States:
    1 - getting_ready
    2 - story_start
    3 - build_a_boat
    4 - explore_forest
    5 - signal_fire
    6 - ending_crash
    7 - canes_boat
    8 - ending_escape
    9 - ending_storm
    10 - ending_tiger
    11 - cave
    12 - ending_treasure
    13 - signal_fire
    13 - ending_nosmoke
    14 - fire_lit
    15 - ending_rescued
    16 - ending_fire_out