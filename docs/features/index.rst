.. container::
   :name: main

   .. rubric:: Global
      :name: global
      :class: page-title

   .. container:: section

      .. rubric:: (route)All possible conversions
         :name: All_possible_conversions
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route

         ====== ====================================
         Method Path
         ====== ====================================
         GET    /unit-conversion/possibleconversions
         ====== ====================================

         The path to check which unit conversions are possible

      Source:
         -  `unitConversion/index.js <unitConversion_index.js.html>`__,
            `line 61 <unitConversion_index.js.html#line61>`__

      .. rubric:: (route)Chart Generator
         :name: Chart_generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-1

         ====== =======
         Method Path
         ====== =======
         POST   /charts
         ====== =======

         Need a chart image from a few values? This route has got you
         covered ;)
         .. rubric:: Body Parameters:
            :name: body-parameters

         +-----------------------+-----------------------+-----------------------+
         | Name                  | Type                  | Description           |
         +=======================+=======================+=======================+
         | type                  | string                | The type of chart you |
         |                       |                       | are going to be       |
         |                       |                       | generating            |
         +-----------------------+-----------------------+-----------------------+
         | values                | Array.                | The array of objects  |
         |                       |                       | of all values you     |
         |                       |                       | want to be showing.   |
         |                       |                       | The objects need to   |
         |                       |                       | be formatted exactly  |
         |                       |                       | how you learned in    |
         |                       |                       | math but with curly   |
         |                       |                       | braces instead of     |
         |                       |                       | parentheses for the   |
         |                       |                       | coordinates,          |
         |                       |                       | {"nameOfTheX-Axis":   |
         |                       |                       | value,                |
         |                       |                       | "nameOfTheY-Axis":    |
         |                       |                       | value}                |
         +-----------------------+-----------------------+-----------------------+
         | xName                 | string                | The name of your      |
         |                       |                       | X-Axis                |
         +-----------------------+-----------------------+-----------------------+
         | yName                 | string                | The name of your      |
         |                       |                       | Y-Axis                |
         +-----------------------+-----------------------+-----------------------+

      Source:
         -  `charts/index.js <charts_index.js.html>`__, `line
            23 <charts_index.js.html#line23>`__

      To Do:
         -  I plan on adding file support for generating a graph from a
            CSV.

      .. rubric:: Example
         :name: example

      .. code:: prettyprint

         {
              "type": "bar",
              "values": [{"Year": "2005", "Price": 280}, {"Year": "2006", "Price": 550}],
              "xName": "Year",
              "yName": "Price"
          }

      .. rubric:: (route)Color Palette Generator
         :name: Color_Palette_Generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-2

         ====== ====================
         Method Path
         ====== ====================
         GET    /colorpalette/:color
         ====== ====================

         Looking for a color palette and need a preview of it? Well
         then, this route is the route for you!
         .. rubric:: Route Parameters:
            :name: route-parameters

         ====== ====== =======================================================
         Name   Type   Description
         ====== ====== =======================================================
         :color string is the color you want to for sure have in your palette.
         ====== ====== =======================================================

      Source:
         -  `colorpalette/index.js <colorpalette_index.js.html>`__,
            `line 10 <colorpalette_index.js.html#line10>`__

      To Do:
         -  I'm planning on adding a randomized starting color in case
            you're not sure what to start with.

      .. rubric:: (route)Joke Generator
         :name: Joke_Generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-3

         ====== ==============
         Method Path
         ====== ==============
         GET    /shortjoke/get
         ====== ==============

         This is the route you can go to for a short laugh, this uses a
         database of short jokes that has more than 100,000 entries, You
         shouldn't be running out of jokes for the next 2 months if you
         generated 1 joke every minute of the day.
         Warning: some of these are slightly NSFW, I filtered out some
         of the ones that were just too NSFW but for some of these I
         wouldn't be reading them out loud in front of your parents.

      Source:
         -  `entertainment/index.js <entertainment_index.js.html>`__,
            `line 26 <entertainment_index.js.html#line26>`__

      .. rubric:: (route)Population Growth Predictive Model
         :name: Population_Growth_Predictive_Model
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-4

         ====== ======================
         Method Path
         ====== ======================
         POST   /simulation/population
         ====== ======================

         I really have no fun description for this, you can get a graph
         of how well a species survives with a few known variables with
         this route.
         .. rubric:: Body Parameters:
            :name: body-parameters-1

         +------------------+--------+------------+---------+------------------+
         | Name             | Type   | Attributes | Default | Description      |
         +==================+========+============+=========+==================+
         | M                | string | optional   | "1/1"   | This is the      |
         | aleToFemaleRatio |        |            |         | amount of        |
         |                  |        |            |         | females for      |
         |                  |        |            |         | males, this      |
         |                  |        |            |         | variable and the |
         |                  |        |            |         | description is   |
         |                  |        |            |         | named            |
         |                  |        |            |         | confusingly but  |
         |                  |        |            |         | you're supposed  |
         |                  |        |            |         | to give the      |
         |                  |        |            |         | amount of        |
         |                  |        |            |         | females for      |
         |                  |        |            |         | males, so        |
         |                  |        |            |         | "females/males". |
         +------------------+--------+------------+---------+------------------+
         | re               | number |            |         | This is the      |
         | productionAmount |        |            |         | amount the       |
         |                  |        |            |         | average sample   |
         |                  |        |            |         | of the species   |
         |                  |        |            |         | reproduces       |
         +------------------+--------+------------+---------+------------------+
         | population       | number |            |         | This is the      |
         |                  |        |            |         | amount of        |
         |                  |        |            |         | starting agents, |
         |                  |        |            |         | that means the   |
         |                  |        |            |         | starting size of |
         |                  |        |            |         | the species.     |
         +------------------+--------+------------+---------+------------------+

      Source:
         -  `simulations/index.js <simulations_index.js.html>`__, `line
            146 <simulations_index.js.html#line146>`__

      To Do:
         -  I'm planning on adding a few more values, for example the
            amount of miscarriages, the average age of death, etc
         -  I'm planning on returning a graph of values, this requires a
            rewrite of basically the entire code however

      .. rubric:: (route)Quote Backdrop Generator
         :name: Quote_Backdrop_Generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-5

         ====== ======
         Method Path
         ====== ======
         POST   /quote
         ====== ======

         I'll be honest; this route was mostly made for me to meme on
         people with dumb, overly-inspirational statuses. However it can
         actually be useful, say you read a quote you really like and
         would like to share it in a creative, non-text way, just send
         the quote in to this route and you're free to share it! Don't
         know any good quotes and want to be inspired? There's some
         pre-generated (I used a Markov Chain to generate some new
         quotes, not because Markov chains are good at text generation,
         but usually they're funny) quotes you can use have a laugh,
         share with your friends or just feel inspired by.
         .. rubric:: Body Parameters:
            :name: body-parameters-2

         +-------+--------+------------+---------------+-------------------+
         | Name  | Type   | Attributes | Default       | Description       |
         +=======+========+============+===============+===================+
         | quote | string | optional   | pre-generated | The quote you     |
         |       |        |            |               | want to display   |
         |       |        |            |               | in front of a     |
         |       |        |            |               | backdrop.         |
         +-------+--------+------------+---------------+-------------------+

      Source:
         -  `quotes/index.js <quotes_index.js.html>`__, `line
            30 <quotes_index.js.html#line30>`__

      To Do:
         -  Make it possible to upload your own images
         -  Get more backdrop images and categorize them
         -  Add an option to choose between real and generated quotes

      .. rubric:: (route)Radix Sort
         :name: Radix_Sort
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-6

         ====== =====
         Method Path
         ====== =====
         POST   /sort
         ====== =====

         Need to sort some things? Well this is the route for you! This
         route uses a Radix sorting algorithm to sort the array you put
         in the body. I did quite some research on sorting algorithms
         and Radix sort was one of the best. I could have used ES2015's
         .sort() function but I read that it preferred some characters
         over others and obviously it was just way too easy for me to
         use something someone else had already made ._.
         .. rubric:: Body Parameters:
            :name: body-parameters-3

         +-------+-------+----------------------------------------------------+
         | Name  | Type  | Description                                        |
         +=======+=======+====================================================+
         | array | Array | This needs an array of data to be sorted, that can |
         |       |       | be alfabetical, numbers, dates, etc. However with  |
         |       |       | using numbers and alfabetical characters mixed     |
         |       |       | together it will look at the ASCII number of the   |
         |       |       | alfabetical character and use that as the value to |
         |       |       | compare to the number with. This means that it can |
         |       |       | be inaccurate when using them together.            |
         +-------+-------+----------------------------------------------------+

      Source:
         -  `radixSort/index.js <radixSort_index.js.html>`__, `line
            43 <radixSort_index.js.html#line43>`__

      To Do:
         -  Add more types of sorting
         -  Find a better way of checking whether it's a number/letter
         -  Implement better sorting between alphabetical characters and
            numbers

      .. rubric:: (route)Riddle Generator
         :name: Riddle_Generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-7

         ====== ===========
         Method Path
         ====== ===========
         GET    /riddle/get
         ====== ===========

         This is the route you can go to if you want a good riddle to
         get you thinking, it also gives the solution to that riddle so
         a client for this route should be fairly straight-forward. This
         dataset is fairly small so getting a bigger dataset is
         definitely on my todo list.

      Source:
         -  `entertainment/index.js <entertainment_index.js.html>`__,
            `line 41 <entertainment_index.js.html#line41>`__

      To Do:
         -  Getting a bigger dataset for this
         -  Add a route to add riddles

      .. rubric:: (route)SIR Epidemic Model
         :name: SIR_Epidemic_Model
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-8

         ====== ===============
         Method Path
         ====== ===============
         POST   /simulation/sir
         ====== ===============

         ...
         Did a pandemic just hit and do you want to check how fatal that
         would be for humanity using a calculation method that is only
         backed up by
         `Wikipedia <https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model>`__
         that's programmed by someone that's 14 years old? No? Moving
         on...
         .. rubric:: Body Parameters:
            :name: body-parameters-4

         +---------+--------+-------------------------------------------------+
         | Name    | Type   | Description                                     |
         +=========+========+=================================================+
         | alpha   | number | This is the basic reproduction number, so the   |
         |         |        | amount of chance that this                      |
         |         |        | virus/bacteria/disease spreads.                 |
         +---------+--------+-------------------------------------------------+
         | beta    | number | This is the average amount of contacts the      |
         |         |        | person has, making this value smaller means     |
         |         |        | that no matter how fast it can spread, it will  |
         |         |        | be contained between this amount of people      |
         +---------+--------+-------------------------------------------------+
         | I0      | number | This is the amount of starting agents, that     |
         |         |        | means the amount of people who start out with   |
         |         |        | the virus/bacteria/disease.                     |
         +---------+--------+-------------------------------------------------+
         | N       | number | This is the constant starting population number |
         +---------+--------+-------------------------------------------------+
         | delT    | number | This is the size of the steps in time the graph |
         |         |        | will be taking                                  |
         +---------+--------+-------------------------------------------------+
         | maxTime | number | This is the amount of time the graph you        |
         |         |        | generate will go on to                          |
         +---------+--------+-------------------------------------------------+

      Source:
         -  `simulations/index.js <simulations_index.js.html>`__, `line
            9 <simulations_index.js.html#line9>`__

      To Do:
         -  Change from chart-js to vega-lite as chart-js is extremely
            unreliable.

      .. rubric:: (route)Sudoku Generator
         :name: Sudoku_Generator
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-9

         ====== ================
         Method Path
         ====== ================
         GET    /sudoku/generate
         ====== ================

         Riddles not hard enough for you? Well try these sodukos then!
         This does not use a dataset at all, this uses a randomly
         generated array of \*possible\* sudoku values, which means
         there are almost infinite possibilities
         (`6,670,903,752,021,072,936,960
         possibilities <http://en.wikipedia.org/wiki/Mathematics_of_Sudoku>`__
         for all you nerds out there) so there's absolutely no way you
         can run out of sudokus.

      Source:
         -  `entertainment/index.js <entertainment_index.js.html>`__,
            `line 60 <entertainment_index.js.html#line60>`__

      .. rubric:: (route)Task add
         :name: Task_add
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-10

         ====== ==============
         Method Path
         ====== ==============
         POST   /tasks/addtask
         ====== ==============

         The path to add a task to a specific board
         .. rubric:: Body Parameters:
            :name: body-parameters-5

         +---------+---------------+------------+---------+-----------------+
         | Name    | Type          | Attributes | Default | Description     |
         +=========+===============+============+=========+=================+
         | newtask | string,Array. |            |         | This is the     |
         |         |               |            |         | task you want   |
         |         |               |            |         | to add, this    |
         |         |               |            |         | can either be   |
         |         |               |            |         | an object with  |
         |         |               |            |         | a due date and  |
         |         |               |            |         | stuff or a      |
         |         |               |            |         | string with     |
         |         |               |            |         | just the name   |
         |         |               |            |         | of the task.    |
         +---------+---------------+------------+---------+-----------------+
         | board   | string        | optional   | "inbox" | This is the     |
         |         |               |            |         | board you want  |
         |         |               |            |         | to add the task |
         |         |               |            |         | to, it defaults |
         |         |               |            |         | to inbox so     |
         |         |               |            |         | just leaving    |
         |         |               |            |         | this empty      |
         |         |               |            |         | makes the task  |
         |         |               |            |         | go to inbox     |
         +---------+---------------+------------+---------+-----------------+
         | dueDate | date          | optional   |         | This is the due |
         |         |               |            |         | date of the     |
         |         |               |            |         | task, you don't |
         |         |               |            |         | have to define  |
         |         |               |            |         | this, if you    |
         |         |               |            |         | don't define    |
         |         |               |            |         | this it will    |
         |         |               |            |         | just not be     |
         |         |               |            |         | empty.          |
         +---------+---------------+------------+---------+-----------------+

      Source:
         -  `tasks/index.js <tasks_index.js.html>`__, `line
            34 <tasks_index.js.html#line34>`__

      .. rubric:: (route)Task Add Subtask
         :name: Task_Add_Subtask
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-11

         ====== =================
         Method Path
         ====== =================
         POST   /tasks/addsubtask
         ====== =================

         The path to add a subtask in an already existing task
         .. rubric:: Body Parameters:
            :name: body-parameters-6

         +------------+---------------+------------+---------+----------------+
         | Name       | Type          | Attributes | Default | Description    |
         +============+===============+============+=========+================+
         | parentTask | string        |            |         | This is the    |
         |            |               |            |         | name of the    |
         |            |               |            |         | task you want  |
         |            |               |            |         | to add a       |
         |            |               |            |         | subtask to.    |
         +------------+---------------+------------+---------+----------------+
         | subTask    | string,Array. |            |         | This is the    |
         |            |               |            |         | subtask        |
         +------------+---------------+------------+---------+----------------+
         | board      | string        | optional   | "inbox" | This is the    |
         |            |               |            |         | board the      |
         |            |               |            |         | parent task is |
         |            |               |            |         | in, this will  |
         |            |               |            |         | default to     |
         |            |               |            |         | inbox          |
         +------------+---------------+------------+---------+----------------+

      Source:
         -  `tasks/index.js <tasks_index.js.html>`__, `line
            84 <tasks_index.js.html#line84>`__

      .. rubric:: (route)Task change
         :name: Task_change
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-12

         ====== =================
         Method Path
         ====== =================
         POST   /tasks/changetask
         ====== =================

         The path to change an object of a task in a specific board
         .. rubric:: Body Parameters:
            :name: body-parameters-7

         +----------+--------+------------+---------+--------------------------+
         | Name     | Type   | Attributes | Default | Description              |
         +==========+========+============+=========+==========================+
         | newtask  | string |            |         | This is the task you     |
         |          |        |            |         | want to change it to,    |
         |          |        |            |         | this can either be an    |
         |          |        |            |         | object with a due date   |
         |          |        |            |         | and stuff or a string    |
         |          |        |            |         | with just the name of    |
         |          |        |            |         | the new task.            |
         +----------+--------+------------+---------+--------------------------+
         | oldtask  | string |            |         | This is the old task,    |
         |          |        |            |         | the one you want to      |
         |          |        |            |         | change.                  |
         +----------+--------+------------+---------+--------------------------+
         | oldBoard | string | optional   | "inbox" | This is the board the    |
         |          |        |            |         | old task was in          |
         +----------+--------+------------+---------+--------------------------+
         | newBoard | string | optional   | "inbox" | This is the board you    |
         |          |        |            |         | want the new task to be  |
         |          |        |            |         | in.                      |
         +----------+--------+------------+---------+--------------------------+

      Source:
         -  `tasks/index.js <tasks_index.js.html>`__, `line
            58 <tasks_index.js.html#line58>`__

      .. rubric:: (route)Task Remove
         :name: Task_Remove
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-13

         ====== =================
         Method Path
         ====== =================
         POST   /tasks/removetask
         ====== =================

         The path to remove a task
         .. rubric:: Body Parameters:
            :name: body-parameters-8

         +--------------+--------------+------------+---------+--------------+
         | Name         | Type         | Attributes | Default | Description  |
         +==============+==============+============+=========+==============+
         | completeTask | s            |            |         | This is the  |
         |              | tring,Array. |            |         | name of the  |
         |              |              |            |         | task you     |
         |              |              |            |         | want to      |
         |              |              |            |         | remove or    |
         |              |              |            |         | mark as      |
         |              |              |            |         | complete.    |
         +--------------+--------------+------------+---------+--------------+
         | board        | string       | optional   | "inbox" | This is the  |
         |              |              |            |         | board the    |
         |              |              |            |         | parent task  |
         |              |              |            |         | is in, this  |
         |              |              |            |         | will default |
         |              |              |            |         | to inbox     |
         +--------------+--------------+------------+---------+--------------+

      Source:
         -  `tasks/index.js <tasks_index.js.html>`__, `line
            106 <tasks_index.js.html#line106>`__

      .. rubric:: (route)Task view
         :name: Task_view
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-14

         ====== ===================
         Method Path
         ====== ===================
         GET    /tasks/view/:board?
         ====== ===================

         The path to get an object of all tasks in a specific board
         .. rubric:: Route Parameters:
            :name: route-parameters-1

         +-------+--------+---------------------------------------------------+
         | Name  | Type   | Description                                       |
         +=======+========+===================================================+
         | board | string | This is the board you want to see the tasks for,  |
         |       |        | it defaults to inbox so just going to /tasks/view |
         |       |        | gives you all the tasks for /inbox                |
         +-------+--------+---------------------------------------------------+

      Source:
         -  `tasks/index.js <tasks_index.js.html>`__, `line
            20 <tasks_index.js.html#line20>`__

      .. rubric:: (route)Tech News
         :name: Tech_News
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-15

         ====== =============
         Method Path
         ====== =============
         GET    /techNews/get
         ====== =============

         Looking for some tech news? We got ya covered! This route looks
         for new headlines on
         `ycombinator <https://news.ycombinator.com/news>`__ and logs
         them to a mongoose database. It does this on call with the path
         named above and it also does it automatically at 6am, just so
         you never run out of news

      Source:
         -  `news/index.js <news_index.js.html>`__, `line
            87 <news_index.js.html#line87>`__

      .. rubric:: (route)Torrent downloader
         :name: Torrent_downloader
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-16

         ====== ==============
         Method Path
         ====== ==============
         POST   /movie/torrent
         ====== ==============

         This is the route to download a torrent link, it is specialized
         for movies as it automatically checks for subtitles and merges
         them with the movie if they exist, but this route can be used
         for any torrent link you want, as long as it starts with either
         HTTP(S): or magnet:
         .. rubric:: Body Parameters:
            :name: body-parameters-9

         +-------------+--------+---------------------------------------------+
         | Name        | Type   | Description                                 |
         +=============+========+=============================================+
         | torrentLink | string | This is the variable where you add the link |
         |             |        | to the torrent you want to be downloaded.   |
         +-------------+--------+---------------------------------------------+

      Source:
         -  `movie/index.js <movie_index.js.html>`__, `line
            10 <movie_index.js.html#line10>`__

      To Do:
         -  I need to see if it's possible to use a VPN or proxy here,
            both of those options change or hide the IP address of the
            computer, which would make it impossible to reach the API
            via the IP address.

      .. rubric:: (route)Unit Conversion
         :name: Unit_Conversion
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-17

         ====== ==================================
         Method Path
         ====== ==================================
         GET    /unit-conversion/:amount/:from/:to
         ====== ==================================

         This is the route to convert from and to specific units.
         .. rubric:: Route Parameters:
            :name: route-parameters-2

         ====== ====== ======================================================
         Name   Type   Description
         ====== ====== ======================================================
         amount number This is the starting amount you want to convert from.
         from   string This is the unit of conversion you want to start from.
         to     string This is the unit of conversion you want to convert to.
         ====== ====== ======================================================

      Source:
         -  `unitConversion/index.js <unitConversion_index.js.html>`__,
            `line 35 <unitConversion_index.js.html#line35>`__

      To Do:
         -  I'm using a module for all of it now, I want to change that.
            I'm planning on converting to and from SI units, I have
            already made a JSON file of all units I want to convert and
            with that I'm going to use to convert from unit to SI unit
            to conversion unit, it'd probably be less reliable but I'm
            not really going for reliability with this route, more to
            just get a general idea of how to convert the two values.

      .. rubric:: (route)Website Screenshot
         :name: Website_Screenshot
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-18

         ====== ===========
         Method Path
         ====== ===========
         POST   /screenshot
         ====== ===========

         This is the route to take a full screenshot of a website, this
         means that it will take a screenshot of everything that is on
         the site.
         .. rubric:: Body Parameters:
            :name: body-parameters-10

         +-------------+--------+---------------------------------------------+
         | Name        | Type   | Description                                 |
         +=============+========+=============================================+
         | websiteLink | string | This is the link of the website you want to |
         |             |        | take a screenshot of                        |
         +-------------+--------+---------------------------------------------+

      Source:
         -  `webbie/index.js <webbie_index.js.html>`__, `line
            20 <webbie_index.js.html#line20>`__

      .. rubric:: (route)XSS checker
         :name: XSS_checker
         :class: name

      .. container:: description

         .. rubric:: Route:
            :name: route-19

         ====== ===============
         Method Path
         ====== ===============
         POST   /vulnerabilites
         ====== ===============

         This is the route that checks if a website is vulnerable to XSS
         attacks.
         .. rubric:: Body Parameters:
            :name: body-parameters-11

         +-------------+--------+---------------------------------------------+
         | Name        | Type   | Description                                 |
         +=============+========+=============================================+
         | websiteLink | string | This is the link of the website you want to |
         |             |        | test for XSS vulnerabilites.                |
         +-------------+--------+---------------------------------------------+

      Source:
         -  `webbie/index.js <webbie_index.js.html>`__, `line
            63 <webbie_index.js.html#line63>`__

      To Do:
         -  I need to see if it's possible to use a VPN or proxy here,
            both of those options change or hide the IP address of the
            computer, which would make it impossible to reach the API
            via the IP address.

`Home <index.html>`__
---------------------

.. _global-1:

Global
~~~~~~

-  `All possible conversions <global.html#All_possible_conversions>`__
-  `Chart Generator <global.html#Chart_generator>`__
-  `Color Palette Generator <global.html#Color_Palette_Generator>`__
-  `Joke Generator <global.html#Joke_Generator>`__
-  `Population Growth Predictive
   Model <global.html#Population_Growth_Predictive_Model>`__
-  `Quote Backdrop Generator <global.html#Quote_Backdrop_Generator>`__
-  `Radix Sort <global.html#Radix_Sort>`__
-  `Riddle Generator <global.html#Riddle_Generator>`__
-  `SIR Epidemic Model <global.html#SIR_Epidemic_Model>`__
-  `Sudoku Generator <global.html#Sudoku_Generator>`__
-  `Task add <global.html#Task_add>`__
-  `Task Add Subtask <global.html#Task_Add_Subtask>`__
-  `Task change <global.html#Task_change>`__
-  `Task Remove <global.html#Task_Remove>`__
-  `Task view <global.html#Task_view>`__
-  `Tech News <global.html#Tech_News>`__
-  `Torrent downloader <global.html#Torrent_downloader>`__
-  `Unit Conversion <global.html#Unit_Conversion>`__
-  `Website Screenshot <global.html#Website_Screenshot>`__
-  `XSS checker <global.html#XSS_checker>`__

| 
